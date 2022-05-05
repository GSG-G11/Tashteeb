import {useState , createContext} from "react"
const Context = createContext();

const SignupContext = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <div>
      <Context.Provider
        value={{
        data,
        setData
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
export { SignupContext, Context };