// https://stackoverflow.com/questions/43744312/react-js-get-current-date



// sorts dates into earliest to latest
function bubbleSort(dates) {
    let sorted = false;

    let counter = 0;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < dates.length - 1 - counter; i++) {
        if (dates[i] > dates[i + 1]) {
          helper(i, i + 1, dates);
          sorted = false;
        }
      }
      counter++;
    }

    return dates;
  }
    //swap function
  function helper(i, j, dates) {
    return ([dates[i], dates[j]] = [dates[j], dates[i]]);
  }

  export function mapPeriodDates(availablePeriods) {
  // maps the avaibleperiods to start and end dates i nseprate lists
  const endDates = availablePeriods.map((period) => period.endDate);
  const startDates = availablePeriods.map((period) => period.startDate);
  // sends in start and end dates to be sorted into earlies to latest
  const startUseDates = bubbleSort(startDates);
  const endUseDates = bubbleSort(endDates);

  return { startUseDates, endUseDates };

  }


  // get todays date
 export function getCurrentDate(separator='-'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }