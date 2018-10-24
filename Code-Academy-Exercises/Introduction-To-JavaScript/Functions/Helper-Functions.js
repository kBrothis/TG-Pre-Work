function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns){
	return monitorCount(rows,columns)*200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);

//helper functions are functions being called within another function. It makes it easier to debug since each function has its  own task.
