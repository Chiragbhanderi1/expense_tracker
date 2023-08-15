import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { ExpenseListTab } from "../components/ExpenseListTab"

export const Expenses = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Expense List</Tab>
        <Tab>DashBoard</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ExpenseListTab/>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}