import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
	return (
		<div>
			<h1>JavaScript</h1>
			<VariablesAndConstants />
			<VariableTypes />
			<BooleanVariables />
			<IfElse />
			<TernaryOperator />
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/> 
            <House/>
            <Spreading />
            <Destructing/>
            <FunctionDestructing/>
            
		</div>
	);
}
export default JavaScript;
