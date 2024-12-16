import { createContext,useContext } from "react";
                                                //earlier in the State-management-using-ContextAPI project, we created a separate file just to create UserContext. 
export const ThemeContext = createContext({     //here we have directly created ThemeContext which will now provide a major thing- a provider.
    themeMode: "light",                         //and in the last project, we passed some initial values(null) and setUser function also which was used for state updation
    darkTheme: () => {},                        //so same way passing some initial values to variables and functions
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider  // Themecontext will give you the major thing- A provider. Means a sandwhich where in between you can put components.

export default function useTheme(){  //custom hook
    return useContext(ThemeContext)   // earlier we used to import  useContext hook everytime in every file. So to avoid this, just import ThemeContext, then no need import
                                    // useContext separately.  Just to save the lines of code :)

                                    //So whenever you want to fetch   themeMode: "light",
                                    //                                darkTheme: () => {},
                                    //                                lightTheme: () => {}, --> simply use ThemeContext

                                    //Earlier it was            const { user } = useContext(UserContext); // Access the user data from the context
                                    //                          if (!user) return <div>Please login</div>; // Handle when no user is logged in
                                    //                          return <div>Welcome, {user.username}!</div>;
}