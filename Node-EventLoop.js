function execute(metricData,javascriptResultSetHelper) {

    var i=0;  					// binding iterator

	log.info("Node Event Loop Calculator called, " +  metricData.length);

	// Collects Agent, Metric, and Values from the Input
    for (i=0; i < metricData.length; i++) {
        var metric = metricData[i].agentMetric.attributeURL;
        var agent = metricData[i].agentName.processURL;
        var value = metricData[i].timeslicedValue.value;
        var frequency = metricData[i].frequency;
     	var isAbsent = metricData[i].timeslicedValue.dataIsAbsent();
		var min = metricData[i].timeslicedValue.getMinimumAsLong();
		var max = metricData[i].timeslicedValue.getMaximumAsLong();
		var count = metricData[i].timeslicedValue.dataPointCount;
		var fullBTTree = agent +"|"+ metric;

		// needs only these 2 metrics
        if (isAbsent == false) {		// Skip if no data is coming in. Will change to gray.

			var fullBTTree = agent +"|"+ metric;		// full path with agent name

			log.info(fullBTTree + " Ticks Per Interval: " + count);

			javascriptResultSetHelper.addMetric(fullBTTree + " Ticks Per Interval",
				count, count, 0, count,
				// the result type
				Packages.com.wily.introscope.spec.metric.MetricTypes.kLongIntervalCounter,
				frequency);

			log.info(fullBTTree + " Average Tick Time (ms): " + count + ", " +  value + ", " +  min + ", " +  max);

			javascriptResultSetHelper.addMetric(fullBTTree + " Average Tick Time (ms)",
				count, value, min, max,
				// the result types
				Packages.com.wily.introscope.spec.metric.MetricTypes.kIntegerDuration,
				frequency);
		}
    }

	log.info("Node Event Loop Calculator finished");

    // return the result set
    return javascriptResultSetHelper;
}

function getAgentRegex() {
    return "(.*)\\|(.*)\\|(.*)";
}
function getMetricRegex() {
    return "Node.js Runtime:Event Loop";
}

// must return a multiple of default system frequency (currently 15 seconds)
function getFrequency() {
	return 1 * Packages.com.wily.introscope.spec.metric.Frequency.kDefaultSystemFrequencyInSeconds;
}

//Return false if the script should not run on the MOM.
//Scripts that create metrics on agents other than the Custom Metric Agent
//should not run on the MOM because the agents exist only in the Collectors.
//Default is true.
function runOnMOM()
{
	return false;
}
