import React from "react";

import { Link } from "gatsby";

import {other_mortage_container, mortage_container__inner, link_container, link_item} from "./index.module.css";

const OtherMortgVs30Year = () => {
  return (
    <section className={other_mortage_container}>

      <div className={mortage_container__inner}>
        <h2>30-year fixed mortgages vs. other mortgage types</h2>

        <p>
          30-year fixed rate mortgages are a popular form of financing, but there are other mortgage 
          opportunities at your disposal. Here’s a look at some alternative mortgage structures and 
          how they might compliment your home buying needs.
        </p>

        <div className={link_container}>
          <Link className={link_item} to="">15-year fixed conforming mortgage</Link>
          <Link className={link_item} to="">Jumbo mortgage</Link>
          <Link className={link_item} to="">5-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">FHA conforming mortgage</Link>

          <Link className={link_item} to="">7-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">VA conforming mortgage</Link>
          <Link className={link_item} to="">10-year ARM conforming mortgage</Link>
          <Link className={link_item} to="">Interest-only mortgage</Link>
        </div>
      </div>
    </section>
  )

}

export default OtherMortgVs30Year;