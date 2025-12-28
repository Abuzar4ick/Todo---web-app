// components
import FormInput from "../components/FormInput";
import TodoList from "../components/TodoList";
import DoneList from "../components/DoneList";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="relative w-145.75 text-white flex flex-col items-center gap-y-12">
        <FormInput />
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
};

export default HomePage;
