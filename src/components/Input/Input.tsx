import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name?: string;
  label?: string;
  error: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="sm">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="purple.500"
        bgColor="gray.800"
        variant="filled"
        w="90%"
        _hover={{
          bgColor: "gray.800",
          borderColor: "purple.500",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
export const Input = forwardRef(InputBase);
