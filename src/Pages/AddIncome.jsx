import IncomeForm from "../Components/IncomeForm"
import Pageheading from "../Components/Pageheading"

export const AddIncome = () => {
    return (
        <div>
            <Pageheading  subtitle="" pageTitle="Add new income record"/>
            <br/>
            <IncomeForm />
        </div>
    )
}
