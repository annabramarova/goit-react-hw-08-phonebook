import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logout } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <div>
            <p>{user.name}</p>
            <button type='button' onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
};