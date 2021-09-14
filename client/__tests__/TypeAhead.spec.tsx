/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TypeAhead from "../components/Typeahead";
import { personsData } from "../__mocks__/typeAheadData";

let container: any = null;

const numMockPerson = personsData.persons.length;

describe("TypeAhead", () => {
  describe("rendering", () => {
    afterEach(() => {      
      container = null;
    });    

    it("should renders typeahead input", () => {
      const { container } = render(
        <TypeAhead data={personsData.persons} filter={()=>(null)} />
      );
      const typeAheadInput =
      container.getElementsByTagName("input").length;

    expect(typeAheadInput).toBe(1);

      
    });

  });


  describe("filter names ", () => {

  });

});

container = null;
