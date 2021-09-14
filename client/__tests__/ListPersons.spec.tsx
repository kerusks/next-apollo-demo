/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListPersons from "../components/ListPersons";
import { listPersonsData } from "../__mocks__/listPersonsData";

let container: any = null;
const paging = 10;
const numMockPerson = listPersonsData.persons.length;

describe("ListPersons", () => {
  describe("rendering", () => {
    afterEach(() => {      
      container = null;
    });    

    it("should renders persons list", () => {
      const { container, debug } = render(
        <ListPersons persons={listPersonsData.persons} paging={paging} />
      );

      const personCards = container.getElementsByClassName(
        "MuiCardContent-root"
      ).length;

      expect(personCards).toBe(10);
    });

    it("should renders load more button for infinite scroll", () => {
      const { container, debug } = render(
        <ListPersons persons={listPersonsData.persons} paging={paging} />
      );
      const loadMoreButton =
        container.getElementsByTagName("button").length;

      expect(loadMoreButton).toBe(1);
    });
  });


  describe("infinite scroll ", () => {
    it(`should renders persons list ${paging} of ${numMockPerson}`, () => {
      const { container, debug } = render(
        <ListPersons persons={listPersonsData.persons} paging={paging} />
      );

      const personCards = container.getElementsByClassName(
        "MuiCardContent-root"
      ).length;

      expect(personCards).toBe(paging);
    });

    it(`should renders persons list ${2* paging} of ${numMockPerson}`, () => {
      const { container, debug } = render(
        <ListPersons persons={listPersonsData.persons} paging={paging} />
      );      
      // fireEvent.click(container.getElementsByTagName("button"));      
    });
  });

});

container = null;
