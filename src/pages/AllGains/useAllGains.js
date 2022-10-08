import LocalGainsContext from "../../context/local-gains-context";
import { useContext, useEffect, useState } from "react";

function useAllGains(){

    const localGainsCtx = useContext(LocalGainsContext);
    const [sortedGains, setSortedGains] = useState([]);
  
    useEffect(() => {

        setSortedGains([...localGainsCtx.localGains])

    }, [localGainsCtx.localGains])

    return [
        sortedGains, setSortedGains,
    ]
    
}

export default useAllGains;