function showPreview() {
      //if (validateEventNumber()) {
        var eventNumber = document.getElementById('eventNumberInput').value;
        var smsType = document.getElementById('smsTypeSelect').value;
        var cause = document.getElementById('causeSelect').value;
        var Smscause = document.getElementById('SmsCauseSelect').value;
        var customer = document.getElementById('customerInput').value;
        var building = document.getElementById('buildingInput').value;
        var offDateTime = document.getElementById('offDateTimeInput').value;
        var restoreDateTime = document.getElementById('restoreDateTimeInput').value;
        var phase = document.getElementById('phaseSelect').value;
        var repairingObservation = document.getElementById('repairObservationInput').value;
        var observation = document.getElementById('observationInput').value;
        var affectedNetwork = document.getElementById('affectedNetworkInput').value;
        var generator = document.getElementById('generatorInput').value;
        var powerLost = document.getElementById('powerLostInput').value;
        var dateTime = document.getElementById('dateTimeInput').value;
        var Address = document.getElementById('addressInput').value;
        var Remarks = document.getElementById('RemarkInput').value;
  
        var previewContent = eventNumber + '</p>';
        //previewContent += '<p>SMS Type: ' + smsType + '</p>';
  
        if (smsType === 'outage') {
          previewContent += '<p>Cause: ' + Smscause +'</p>';
          previewContent += '<p>Reason: ' + cause + '</p>';
          previewContent += '<p>Customer: ' + customer + '</p>';
          previewContent += '<p>Address: ' + Address + '</p>';

          //previewContent += '<p>Building: ' + building + '</p>';
          //previewContent += '<p>Off Date Time: ' + offDateTime + '</p>';
          //previewContent += '<p>Restore Date Time: ' + restoreDateTime + '</p>';
          //previewContent += '<p>Repairing Observation: ' + repairingObservation + '</p>';
        } else if (smsType === 'emergency') {
          previewContent += '<p>Cause: ' + Smscause + '</p>';
          previewContent += '<p>Reason: ' + cause + '</p>';
          previewContent += '<p>Customer: ' + customer + '</p>';
          previewContent += '<p>Address: ' + Address + '</p>';
          //previewContent += '<p>Off Date Time: ' + offDateTime + '</p>';
          //previewContent += '<p>Restore Date Time: ' + restoreDateTime + '</p>';
          //previewContent += '<p>Observation: ' + observation + '</p>';
        } else if (smsType === 'generator') {
          previewContent += '<p>Cause: ' +  Smscause  + '</p>';
          //previewContent += '<p>Reason: ' + cause + '</p>';
          previewContent += '<p>Remarks: ' + Remarks + '</p>';
          //previewContent += '<p>CEM Network Affected: ' + affectedNetwork + '</p>';
          //previewContent += '<p>Generator: ' + generator + '</p>';
          //previewContent += '<p>Power Lost: ' + powerLost + '</p>';
          //previewContent += '<p>Date and Time: ' + dateTime + '</p>';
        }
  
        document.getElementById('previewContent').innerHTML = previewContent;
        document.getElementById('previewModal').style.display = 'block';
      //}
    }
  
    function closeModal() {
      document.getElementById('previewModal').style.display = 'none';
    }

    function downloadFile() {
      var previewContent = document.getElementById('previewContent').innerText;
      var blob = new Blob([previewContent], { type: 'text/plain' });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'preview.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal();
    }