
function toggleFields() {
  var smsType = document.getElementById('smsTypeSelect').value;
  document.getElementById('causeField').style.display = 'none';
  document.getElementById('customerField').style.display = 'none';
  document.getElementById('buildingField').style.display = 'none';
  document.getElementById('offDateTimeField').style.display = 'none';
  document.getElementById('restoreDateTimeField').style.display = 'none';
  document.getElementById('phaseField').style.display = 'none';
  document.getElementById('repairObservationField').style.display = 'none';
  document.getElementById('observationField').style.display = 'none';
  document.getElementById('cemNetworkAffectedField').style.display = 'none';
  document.getElementById('generatorField').style.display = 'none';
  document.getElementById('powerLostField').style.display = 'none';
  document.getElementById('dateTimeField').style.display = 'none';

  if (smsType === 'outage') {
    document.getElementById('causeField').style.display = 'block';
    document.getElementById('customerField').style.display = 'block';
    document.getElementById('buildingField').style.display = 'block';
    document.getElementById('offDateTimeField').style.display = 'block';
    document.getElementById('restoreDateTimeField').style.display = 'block';
    document.getElementById('phaseField').style.display = 'block';
    
  } else if (smsType === 'emergency') {
    document.getElementById('causeField').style.display = 'block';
    document.getElementById('customerField').style.display = 'block';
    document.getElementById('offDateTimeField').style.display = 'block';
    document.getElementById('restoreDateTimeField').style.display = 'block';
    document.getElementById('observationField').style.display = 'block';
  } else if (smsType === 'generator') {
    document.getElementById('cemNetworkAffectedField').style.display = 'block';
    document.getElementById('generatorField').style.display = 'block';
    document.getElementById('powerLostField').style.display = 'block';
    document.getElementById('dateTimeField').style.display = 'block';
  }
}

function showPreview() {
  //var eventNumber = document.getElementById('eventNumberInput').value;
  var smsType = document.getElementById('smsTypeSelect').value;
  var cause = document.getElementById('causeSelect').value;
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

  var previewContent = '</p>';
  previewContent += '<p>SMS Type: ' + smsType + '</p>';

  if (smsType === 'outage') {
    previewContent += '<p>Cause: ' + cause + '</p>';
    previewContent += '<p>Customer: ' + customer + '</p>';
    previewContent += '<p>Building: ' + building + '</p>';
    previewContent += '<p>Off Date Time: ' + offDateTime + '</p>';
    previewContent += '<p>Restore Date Time: ' + restoreDateTime + '</p>';
    previewContent += '<p>Phase: ' + phase + '</p>';
    previewContent += '<p>Repairing Observation: ' + repairingObservation + '</p>';
  } 
  else if (smsType === 'emergency') {
    previewContent += '<p>Cause: ' + cause + '</p>';
    previewContent += '<p>Customer: ' + customer + '</p>';
    previewContent += '<p>Off Date Time: ' + offDateTime + '</p>';
    previewContent += '<p>Restore Date Time: ' + restoreDateTime + '</p>';
    previewContent += '<p>Observation: ' + observation + '</p>';
    

  } 
  else if (smsType === 'generator') {
    previewContent += '<p>CEM Network Affected: ' + affectedNetwork + '</p>';
    previewContent += '<p>Generator: ' + generator + '</p>';
    previewContent += '<p>Power Lost: ' + powerLost + '</p>';
    previewContent += '<p>Date and Time: ' + dateTime + '</p>';
  }

  document.getElementById('previewContent').innerHTML = previewContent;
  document.getElementById('previewModal').style.display = 'block';
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
function restrictInputToNumbers(event) {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, '');
}  
function downloadSignature(){
  
} 

// document.addEventListener('DOMContentLoaded', function(){
		// const selects = document.querySelectorAll('select');
		
		// selects.forEach(select => {
			// select.addEventListener('change', function(){
				// this.style.color = 'black';
			// });
			
			// select.addEventListener('blur', function(){
				// if(this.value){
					// this.style.color = 'black';
				// }
			// });
		// });
	// });