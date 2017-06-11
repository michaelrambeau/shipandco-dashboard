import React from 'react'
import Pagination from 'components/utils/Pagination'

function paginate (View, { url, pageNumber = 1, pageSize = 10, total, query }) {
  return (props) => {
    return (
      <div>
        {total > pageSize && (
          <Pagination
            currentPage={pageNumber}
            query={query}
            total={total}
            limit={10}
            pageSize={pageSize}
            url={url}
            singular={'item'}
            plural={'items'}
            style={{ paddingBottom: '1rem' }}
          />
        )}
        <View {...props} />
        {total > pageSize && (
          <Pagination
            currentPage={pageNumber}
            query={query}
            total={total}
            limit={10}
            pageSize={pageSize}
            url={url}
            singular={'item'}
            plural={'items'}
            style={{ paddingBottom: '1rem' }}
          />
        )}
      </div>
    )
  }
}

export default paginate
