import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '.';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import NoMatch from '../NoMatch/NoMatch'

const CustomRoutes = (
    <Routes>
        <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" component={NoMatch} />

    </Routes>
)

export default CustomRoutes