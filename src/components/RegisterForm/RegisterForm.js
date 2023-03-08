// import { useFormik } from "formik";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack
// } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { register } from "redux/auth/authOperations";

// const INITIAL_VALUES = {
//     name: "",
//     email: "",
//     password: "",
// }

// export const RegisterForm = () => {
    
//     const dispatch = useDispatch();

//     const formik = useFormik({
//         initialValues: INITIAL_VALUES,
//         onSubmit: ({name, email, password}, { resetForm }) => {
//             dispatch(register( name, email, password ))
//             resetForm();
//         }
//     });
//     return (
//         <Flex bg="gray.100" align="center" justify="center" h="100vh">
//             <Box bg="white" p={6} rounded="md">
//                 <form onSubmit={formik.handleSubmit}>
//                     <VStack spacing={4} align="flex-start">
//                         <FormControl>
//                             <FormLabel htmlFor="name">Email Address</FormLabel>
//                             <Input
//                                 id="name"
//                                 name="name"
//                                 type="name"
//                                 variant="filled"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.name}
//                             />
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel htmlFor="email">Email Address</FormLabel>
//                             <Input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 variant="filled"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.email}
//                             />
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel htmlFor="password">Password</FormLabel>
//                             <Input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 variant="filled"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.password}
//                             />
//                         </FormControl>
//                         <Button type="submit" colorScheme="purple" width="full">
//                             Login
//                         </Button>
//                     </VStack>
//                 </form>
//             </Box>
//         </Flex>
//     );
// };

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
