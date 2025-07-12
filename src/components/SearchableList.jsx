import React from 'react'
import { useState } from 'react';


function SearchableList({data,renderRow,headers,searchableFields=[]}) {
const [searchTerm,setsearchTerm]= useState('');
const filteredData=data.filter(item=>searchableFields.some(field=>String(item[field]||'').toLowerCase().includes(searchTerm.toLowerCase())))
  return (
    <>
   <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setsearchTerm(e.target.value)}
          />
        </div>
        </div>
        <table>
            <thead>
                <tr>
                    {headers.map((header,i)=>(
                        <th key= {i}>{header}</th>

))}
                </tr>
            </thead>
            <tbody>
               {filteredData.length > 0 ? (
            filteredData.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center text-muted">
                No results found.
              </td>
            </tr>
          )}
            </tbody>
        </table>
        </>
  )
}

export default SearchableList