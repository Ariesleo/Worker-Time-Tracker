import React from 'react';
import './Table.css';

const Table = ({ data, totalCalc }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hourly Rate</th>
            <th>Projects</th>
            <th>Duration</th>
            <th>Project Hours</th>
            <th>Total Hours</th>
            <th>Project Cost</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            <>
              {data.map((options, index) => {
                return (
                  <tr key={index}>
                    <td>{options.name}</td>
                    <td>{options.hourlyRate}</td>
                    <td>
                      {Object.keys(options.projects).map((project, index) => {
                        return (
                          <p key={index}>
                            {project}
                            <br />
                          </p>
                        );
                      })}
                    </td>
                    <td>
                      {Object.values(options.projects).map((project, index) => {
                        return (
                          <p key={index}>
                            {Object.values(project.duration)}
                            <br />
                          </p>
                        );
                      })}
                    </td>
                    <td>
                      {Object.values(options.projects).map((project, index) => {
                        return (
                          <p key={index}>
                            {project.projectHours}
                            <br />
                          </p>
                        );
                      })}
                    </td>
                    <td>{options.totalHours}</td>
                    <td>
                      {Object.values(options.projects).map((project, index) => {
                        return (
                          <p key={index}>
                            {project.projectCost}
                            <br />
                          </p>
                        );
                      })}
                    </td>
                    <td>{options.totalCost}</td>
                  </tr>
                );
              })}
              {/* horizontal line */}
              <tr>
                <td colSpan="8">
                  <hr />
                </td>
              </tr>

              {/* total calculation here */}
              {!totalCalc ? (
                <tr>
                  <td colSpan="8">No data to display</td>
                </tr>
              ) : (
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>
                    {Object.keys(totalCalc.projects).map((project, index) => {
                      return (
                        <p key={index}>
                          {Object.values(project)}
                          <br />
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {Object.values(totalCalc.projects).map((project, index) => {
                      return (
                        <p key={index}>
                          {Object.values(project.duration)}
                          <br />
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {Object.values(totalCalc.projects).map((project, index) => {
                      return (
                        <p key={index}>
                          {project.projectHours}
                          <br />
                        </p>
                      );
                    })}
                  </td>
                  <td>{totalCalc.totalHours}</td>
                  <td>
                    {Object.values(totalCalc.projects).map((project, index) => {
                      return (
                        <p key={index}>
                          {project.projectCost}
                          <br />
                        </p>
                      );
                    })}
                  </td>
                  <td>{totalCalc.totalCost}</td>
                </tr>
              )}
            </>
          ) : (
            <tr>
              <td colSpan="8">No data to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
