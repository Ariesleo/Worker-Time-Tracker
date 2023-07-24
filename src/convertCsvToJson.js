const fs = require('fs');

const trackedTime = () => {
  fs.readFile('./files/Tracked Time.csv', 'utf-8', (error, csv) => {
    if (error) {
      console.error(`Error reading the file: ${error}`);
      return;
    }

    try {
      let dataArray = [];
      const rows = csv.split('\n').slice(1); // Remove header row and split into rows
      for (let i = 0; i < rows.length; i++) {
        let row;

        if (rows[i].startsWith('"')) {
          const startIndex = rows[i].indexOf('"');
          const lastIndex = rows[i].lastIndexOf('"');
          const slicedSection = rows[i].slice(startIndex, lastIndex + 1);
          const replacedSection = slicedSection.replace(/,/g, '');
          row = rows[i].replace(slicedSection, replacedSection);
        } else {
          row = rows[i];
        }
        const values = row.split(',');

        // Extract the desired values and store them in variables
        // eslint-disable-next-line no-useless-escape
        const activity = values[0].replace(/\"/g, '');
        const project = values[1];
        const workers = values[2];
        const duration = values[3];
        const time = values[4];
        const durationSeconds = parseInt(values[5]);
        const startTime = values[6];
        const endTime = values[7].replace('\r', '');

        // Create an object with the extracted values
        const data = {
          activity,
          project,
          workers,
          duration,
          time,
          durationSeconds,
          startTime,
          endTime,
        };

        // Push the object to the dataArray
        dataArray.push(data);
      }
      // Convert the array to JSON format
      const jsonData = JSON.stringify(dataArray, null, 2);

      // Write the JSON data to a file
      fs.writeFile('./files/Tracked Time.json', jsonData, 'utf-8', (err) => {
        if (err) {
          console.error(`Error writing JSON file: ${err}`);
          return;
        }
        console.log('JSON file created successfully.');
      });
    } catch (err) {
      console.error(`Error parsing CSV: ${err}`);
    }
  });
};

trackedTime();
