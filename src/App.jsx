import PaymentSection from "./component/PaymentSection";
import QuestionSection from "./component/QuestionSection";
function App() {
  return (
    <>
      <section className="px-24 py-8">
        <div className="px-6 py-4">
          <PaymentSection />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 mb-2" />
          <QuestionSection />
        </div>
      </section>
    </>
  );
}

export default App;
