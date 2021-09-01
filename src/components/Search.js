import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Search({ slide, setSlide }) {
  let slideName = "";
  function handleChange(event, newValue) {
    const itemIndex = incarnations.indexOf(newValue);
    setSlide(itemIndex);
    slideName = newValue;
  }

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        value={slideName}
        onChange={handleChange}
        disableClearable
        options={incarnations}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Doctors"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}

const incarnations = [
  "First Doctor",
  "Second Doctor",
  "Third Doctor",
  "Fourth Doctor",
  "Fifth Doctor",
  "Sixth Doctor",
  "Seventh Doctor",
  "Eighth Doctor",
  "War Doctor",
  "Ninth Doctor",
  "Tenth Doctor",
  "Eleventh Doctor",
  "Twelfth Doctor",
  "Thirteenth Doctor",
];

/* const incarnations = [
  {
    lead: "William Hartnell",
    incarnation: "First Doctor",
    tenure: "1963-1966",
  },
  {
    lead: "Patrick Troughton",
    incarnation: "Second Doctor",
    tenure: "1966-1969",
  },
  {
    lead: "Jon Pertwee",
    incarnation: "Third Doctor",
    tenure: "1970-1974",
  },
  {
    lead: "Tom Baker",
    incarnation: "Fourth Doctor",
    tenure: "1974-1981",
  },
  {
    lead: "Peter Davison",
    incarnation: "Fifth Doctor",
    tenure: "1982-1984",
  },
  {
    lead: "Colin Baker",
    incarnation: "Sixth Doctor",
    tenure: "1984-1986",
  },
  {
    lead: "Sylvester McCoy",
    incarnation: "Seventh Doctor",
    tenure: "1987-1989",
  },
  {
    lead: "Paul McGann",
    incarnation: "Eighth Doctor",
    tenure: "1996",
  },
  {
    lead: "Christopher Eccleston",
    incarnation: "Ninth Doctor",
    tenure: "2005",
  },
  {
    lead: "David Tennant",
    incarnation: "Tenth Doctor",
    tenure: "2005-2010",
  },
  {
    lead: "Matt Smith",
    incarnation: "Eleventh Doctor",
    tenure: "2010-2013",
  },
  {
    lead: "Peter Capaldi",
    incarnation: "Twelfth Doctor",
    tenure: "2014-2017",
  },
  {
    lead: "Jodie Whittaker",
    incarnation: "Thirteenth Doctor",
    tenure: "2018-Present",
  },
]; */

export default Search;
