import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  expect(screen.queryByText(/Now/g)).toBeInTheDocument();
  expect(screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))).not.toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  // Use queryAllByTitle to handle multiple elements with the same title
  const elements = screen.queryAllByTitle(/time video/i);
  expect(elements.length).toBeGreaterThan(0); // Ensure at least one element exists
});

//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
