import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { LoginPage1 } from '../pages/login/LoginPage1'
import { ManagerRegister } from '../pages/register/ManagerRegister'
import { CustomerRegister } from '../pages/register/CustomerRegister'
import { LoginPage2 } from '../pages/login/LoginPage2';
import { HomePage } from '../pages/customer/HomePage';
import { AllProducts } from '../pages/customer/AllProducts';
import { Cart } from '../pages/customer/Cart'
import { CustomerDetails } from '../pages/customer/Profile/CustomerDetails'
import { PlaceOrder } from '../pages/customer/PlaceOrder'
import { CardPay } from '../pages/customer/payment_gateway/CardPay'
import { OrderSuccess } from '../pages/customer/OrderSuccess'
import { Home } from '../pages/manager/Home'

import { Dashboard } from '../pages/manager/Dashboard'
import { UpdateCustomer } from '../pages/manager/UpdateCustomer'
import { AddCustomer } from '../pages/manager/AddCustomer'
import { DailyStocks } from '../pages/manager/DailyStocks'
import { UserDetails } from '../pages/customer/Profile/UserDetails'
import { FamilyMembers } from '../pages/customer/Profile/FamilyMembers'
import { ShopDetails } from '../pages/customer/Profile/ShopDetails'
import { Inbox } from '../pages/customer/Profile/Inbox'
import { OrderHistory } from '../pages/customer/Profile/OrderHistory'
import { OrderedDetails } from '../pages/customer/Profile/OrderedDetails'
import { UpdatedRecords } from '../pages/manager/UpdatedRecords'


export const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/Customer-login' element={<LoginPage1 />} />
      <Route path='/customer-register' element={<CustomerRegister />} />



      <Route path='/manager-register' id='manager-register' element={<ManagerRegister />} />

      <Route path='/manager-login' id='manager-login' element={<LoginPage2 />} />

      <Route path='/' id='home' element={<HomePage />} />


      <Route path='/allProducts' id='allProducts' element={<AllProducts />} />

      <Route path='/myCart' id='myCart' element={<Cart />} />

      <Route path='/myProfile' id='myProfile' element={<CustomerDetails />}>
        <Route path='/myProfile/userDetail'  element={<UserDetails />} />
        <Route path="/myProfile/family-members" element={<FamilyMembers />} />
        <Route path="/myProfile/shop-details" element={<ShopDetails />} />
        <Route path="/myProfile/inbox" element={<Inbox />} />
        <Route path="/myProfile/order-history" element={<OrderHistory />} />
        <Route path="/myProfile/order-history/order-details" element={<OrderedDetails />} />

      </Route>

      <Route path='/placeOrder' id='placeOrder' element={<PlaceOrder />} />

      <Route path='/CardPayment' id='CardPayment' element={<CardPay />} />

      <Route path='/OrderSuccess' id='OrderSuccess' element={<OrderSuccess />} />


      {/* Manager */}


      <Route path='/ShopManager' id='ShopManager' element={<Home />}>
        <Route path='/ShopManager/update' id='' element={<UpdateCustomer />} />

        <Route path='/ShopManager/dashboard' id='' element={<Dashboard />} />

        <Route path='/ShopManager/add' id='' element={<AddCustomer />} />

        <Route path='/ShopManager/DailyStocks' id='' element={<DailyStocks />} />
        <Route path='/ShopManager/UpdatedRecords' id='' element={< UpdatedRecords/>} />








      </Route>







    </Routes>
  )
}
