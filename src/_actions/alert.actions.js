import { alertConstants } from '../_constants';
import { toast } from 'react-toastify';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return toast.success(message)
    //return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return toast.error(message)
    //return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}