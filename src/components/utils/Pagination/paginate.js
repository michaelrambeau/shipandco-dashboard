import React from 'react'
import Pagination from 'components/utils/Pagination'

function paginate (View, { url, pageNumber = 1, pageSize = 10, total }) {
  return (props) => {
    return (
      <div>
        <Pagination
          currentPage={pageNumber}
          total={total}
          limit={10}
          pageSize={pageSize}
          url={url}
          singular={'item'}
          plural={'items'}
          style={{ paddingBottom: '1rem' }}
        />
        <View {...props} />
      </div>
    )
  }
}

export default paginate
