import { useState } from "react";
import { useEffect } from "react";

const useServicehook = (option) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./iiucServiceData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return option ? [services.slice(0, 4)] : [services];
}
export default useServicehook;