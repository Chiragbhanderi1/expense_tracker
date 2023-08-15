import { Box, Button, HStack, Heading, Stack } from "@chakra-ui/react"
import { useFrappeGetDocList } from "frappe-react-sdk"

export const ExpenseListTab = () => {
  const {data,isLoading,error} = useFrappeGetDocList('Expense Record')
  console.log(data,isLoading,error)
  return (
    <Stack>
      <HStack justify={"space-between"}>
        <Heading as={"h3"} fontSize={"xl"}>Expenses</Heading>
        <Box>
          <Button colorScheme="blue">Add</Button>
        </Box>
      </HStack>
    </Stack>
  )
}