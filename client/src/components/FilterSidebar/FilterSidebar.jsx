import "./FilterSidebar.css";


function FilterSidebar({ filters, setFilters }) {
  const toggleFilter = (category, value) => {

    setFilters((prev) => {


      const exists = prev[category].includes(value);
      return {
        ...prev,
        [category]: exists

          ? prev[category].filter((item) => item !== value)

          : [...prev[category], value]
      };
    });
  };

  const FilterOption = ({ category, value, label }) => (

    <label className="filter-option">

      <input
        type="checkbox"
        checked={filters[category].includes(value)}
        onChange={() => toggleFilter(category, value)}
      />

      <span>
        {label}
      </span>

    </label>
  );

  return (


    <aside className="filter-sidebar">

      <h3>

        Filters

      </h3>

      <div className="filter-section">
        <p>

          Working Schedule

        </p>
        <FilterOption

          category="schedule"

          value="FULL_DAY"

          label="Full Time"

        />



        <FilterOption

          category="schedule"

          value="FLEXIBLE"

          label="Flexible"

        />



        <FilterOption

          category="schedule"

          value="PART_TIME"

          label="Part Time"

        />


      </div>






      <div className="filter-section">


        <p>

          Work Mode

        </p>



        <FilterOption

          category="workMode"

          value="REMOTE"

          label="Remote"

        />



        <FilterOption

          category="workMode"

          value="HYBRID"

          label="Hybrid"

        />



        <FilterOption

          category="workMode"

          value="ONSITE"

          label="On-site"

        />


      </div>






      <div className="filter-section">


        <p>

          Employment Type

        </p>



        <FilterOption

          category="employmentType"

          value="INTERNSHIP"

          label="Job"

        />



        <FilterOption

          category="employmentType"

          value="FULL_TIME"

          label="Full-time"

        />



        <FilterOption

          category="employmentType"

          value="CONTRACT"

          label="Contract"

        />


      </div>



    </aside>


  );


}


export default FilterSidebar;