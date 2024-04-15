import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App"

// src/__ tests __/App.test.tsx

describe("Travel and tours website testing ", () => {
  it("Test : Search should redirect to best places", async () => {
    render(<App />)
    await waitFor(() => screen.findByText(/Search Your Destination/i));
    fireEvent.click(screen.getByText(/Search Now/i));
    await waitFor(() => screen.findByText(/Best Places to Visit/i))
    expect(screen.getByText(/Best Places to Visit/i)).toBeInTheDocument();
  });
  it("Test : Home page should contain best for you and Our latest blogs sections", async ()=>{
    render(<App />)
    fireEvent.click(screen.getAllByText(/Home/i)[0]);
    expect(screen.getByText(/Best Places for you/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Latest Blogs/i)).toBeInTheDocument();
  })
  it("Test : Best places list should contain all places", async ()=>{
    render(<App />)
    expect(screen.getByText(/Boat/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Taj Mahal/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Underwater/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Sydney/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Los Angeles/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Los Vegas/i)[0]).toBeInTheDocument();
  })
  it("Test : Latest blog should contain all blogs", async ()=>{
    render(<App />)
    fireEvent.click(screen.getAllByText(/Blogs/i)[0]);
    expect(screen.getByText(/Top places to visit in India/i)).toBeInTheDocument();
    expect(screen.getByText(/Top places to visit in US/i)).toBeInTheDocument();
    expect(screen.getByText(/Top places to visit in Japan/i)).toBeInTheDocument();
  })
});
