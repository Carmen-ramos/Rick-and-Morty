//I'm learning how to test my own code and this is the type of test I can handle by myself (unitary and simple) at the moment.I keep learning to improve it.

import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
test("renders Carmen Ramos Martínez ", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Carmen Ramos Martínez/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Esta página puede tener contenido sensible basado en la serie Rick and Morty calificada para mayores de 18 años.", () => {
  render(<Footer />);
  const linkElement = screen.getByText(
    /Esta página puede tener contenido sensible basado en la serie Rick and Morty calificada para mayores de 18 años./i
  );
  expect(linkElement).toBeInTheDocument();
});
