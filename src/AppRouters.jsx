import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./page/PrivateRoutes";
import Default from "./page/Default";

// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import AdcClaim from "./Pages/AdcClaim";

// import Products from "./Pages/Products";
// import Purchase from "./Pages/Purchase";

// const initialValues =
// {
//     MerchantClamNo: '123',
//     ClaimType: 'OPD',
//     ProductId: '02',
//     MemberNo: '424234',
//     EnrollmentDate: '',
//     MemberName: '',
//     AccountNo: '',
//     BankRoutingNo: '',
//     AccountHolderName: '',
//     TotalClaimAmount: '',
//     PayMode: '',
//     Messages: ''
// }

function AppRouters() {
    return (
        <>
            {/* <Navbar /> */}

            <Routes>

                <Route element={<PrivateRoutes />}>

                    <Route element={<Default />} path="/" />
                    {/* <Route element={<AdcClaim ival={initialValues} />} path="/claims" />
                    <Route element={<Products />} path="/products" />
                    <Route element={<Purchase />} path="/products/:productId/:productName" /> */}

                </Route>

                {/* <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" /> */}

            </Routes>
            {/* <RouterProvider router={routers} /> */}
            {/* <Footer /> */}
        </>
    );
}

export default AppRouters;