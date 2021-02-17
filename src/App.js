import { AddNewItem } from "./AddNewItem";

const App = () => {
    return (
        <AppContainer>
            <Column text="To Do">
                <Card text="Generate app scaffold"/> </Column>
            <Column text="In Progress">
                <Card text="Learn Typescript"/> </Column>
            <Column text="Done">
                <Card text="Begin to use static typing"/>
            </Column>
            <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log("asd")}/>
        </AppContainer>
    );
};