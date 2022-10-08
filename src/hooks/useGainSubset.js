import { useEffect } from "react";

function useGainSubset(parentSet, setSubset, size, algorithm) {

  useEffect(() => {
    let newSubset = [...parentSet];
    newSubset.sort(algorithm);
    setSubset(newSubset.slice(0, size));
  }, [parentSet, setSubset, size, algorithm])

}

export default useGainSubset;
