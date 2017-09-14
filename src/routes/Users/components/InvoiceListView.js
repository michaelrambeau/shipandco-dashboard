import React, { PropTypes } from 'react'
import get from 'lodash.get'

import UserInvoiceList from 'components/User/Billing/UserInvoiceList'
import UserBillingInfo from 'components/User/Billing/UserBillingInfo'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'
import Tabs from 'components/User/Tabs'

const InvoiceListView = ({
  user,
  items,
  total,
  pageNumber,
  pageSize,
  loading,
}) => {
  const customerId = get(user, 'billing.customer_id')
  const options = {
    url: `/users/${user._id}/billing`,
    pageNumber,
    total,
    pageSize,
  }
  // const List = paginate(ShipmentList, options)
  return (
    <div>
      {loading
        ? <Loading />
        : <div>
            <Tabs userId={user._id} activeTab="billing" user={user} />
            {customerId
              ? <div>
                  <UserBillingInfo billing={user.billing} />
                  <UserInvoiceList invoices={items} />
                </div>
              : <div className="notification is-warning">
                  No billing information.
                </div>}
          </div>}
    </div>
  )
}

InvoiceListView.propTypes = {
  user: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default InvoiceListView
