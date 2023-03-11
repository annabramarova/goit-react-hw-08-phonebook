import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';


const modalRoot = document.querySelector('#modal-root');

export const ModalEditContact = ({contact, modalHandler}) => {
    const dispatch = useDispatch();
    const { id, name, number } = contact;
    const { isOpen, onClose } = modalHandler;

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name,
            number,
        },
    });

    const onSubmit = data => {
        dispatch(updateContact({ id, data }));
        reset();
        onClose();
    }

     return createPortal(
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={3} maxW='container.xl'>
        <ModalCloseButton zIndex="docked" />
        <Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
          <Box pos="relative">
            <FormLabel>
              Name
              <InputGroup mt={3}>
                <Input
                  {...register('name', {
                    required: 'Name is required',
                    pattern: {
                      value:
                        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                      message:
                        'Name may contains only letters, apostrophe, dash and spaces.',
                    },
                  })}
                  type="text"
                />
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineUser color="gray.300" />}
                />
              </InputGroup>
            </FormLabel>
            <Box position="absolute" top="95%">
              {errors?.name && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.name?.message || 'Error'}
                </Text>
              )}
            </Box>
          </Box>
          <Box pos="relative">
            <FormLabel>
              Number
              <InputGroup mt={3}>
                <Input
                  {...register('number', {
                    required: 'Number is required',
                    pattern:
                      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                    message:
                      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                  })}
                  type="tel"
                />
                <InputLeftElement
                  pointerEvents="none"
                  transform="rotate(-90deg) scale(-1) "
                  children={<AiOutlinePhone color="gray.300" />}
                />
              </InputGroup>
            </FormLabel>

            <Box position="absolute" top="95%">
              {errors?.number && (
                <Text
                  fontSize="xs"
                  color="#ff001b"
                  textShadow="rgb(0 0 0 / 25%) 0px 2px 2px"
                >
                  {errors?.number?.message || 'Error'}
                </Text>
              )}
            </Box>
          </Box>
          <Button type="submit">Save</Button>
        </Stack>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};

ModalEditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  modalHandler: PropTypes.object.isRequired,
};