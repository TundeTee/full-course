import {useState} from 'react';
import{Box,Container,Heading,VStack,Button, Input,useColorModeValue} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
     const toast = useToast()
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
  });
  
  const {createProduct} = useProductStore();

  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct);
   if(!success){
    toast({
  title: "Error",
  description: message,
  status: "error",
   isClosable: true,
});
   }else{
    toast({
  title: "Success",
  description: message,
  status: "success",
  isClosable: true,
   });
  } setNewProduct({name: "", price: "", image: ""});
};
  return( <Container maxW={"container.sm"}>
<VStack spacing = {8}>
    <Heading as={"h1"} size={"2xl"} textAlign={"center"}mb={8} bgGradient={"linear(to-r, cyan.800, blue.200)"}
    bgClip={"text"}>
    Create New Product
</Heading>
<Box bg={useColorModeValue("white", "gray.800")} w={"full"} p={"6"} rounded={"lg"} shadow={"md"} >
<VStack spacing={4}>
    <Input placeholder='Product Name'
    name ='name'
    value= {newProduct.name}
    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
    />
    <Input 
    placeholder='Price'
    price ='price'
    type = 'number'
    value= {newProduct.price}
    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
    />
    <Input 
    placeholder='Image URL'
    name ='image'
    value= {newProduct.image}
    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
    />
    <Button onClick= {handleAddProduct}  w='full'>Add Product</Button>

     <Button  w='full'> <Link to={"/"}>Show Added Product</Link></Button>

</VStack>
</Box>
</VStack>

</Container>

  );
};

export default CreatePage





