import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Gas",
    amount: 69.67,
    date: new Date("2022-09-18"),
  },
  {
    id: "e2",
    description: "Ring",
    amount: 54.61,
    date: new Date("2021-01-18"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 3.99,
    date: new Date("2022-09-12"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 12.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e5",
    description: "Second book",
    amount: 5.99,
    date: new Date("2022-01-24"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
