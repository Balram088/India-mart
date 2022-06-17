import { FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  useDisclosure } from "@chakra-ui/react";
import { Button, Modal } from "@chakra-ui/react";
import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from "styled-components";



function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      
      <>
      
        <Button onClick={onOpen} class="login"> <AccountCircleOutlinedIcon/></Button>
         <Modal
          LoginRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
           

              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input ref={initialRef} placeholder='Enter Your Mobile Number'  type="Number" required/>
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button   colorScheme='blue' mr={3}>
              Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
      </>
    )
  }
  export default Login;