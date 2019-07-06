$(function() {
  $('#date_range').datepicker({
    range: 'period', // режим - выбор периода
    numberOfMonths: 2,
    onSelect: function(dateText, inst, extensionRange) {
    	// extensionRange - объект расширения
      $('[name=startDate]').val(extensionRange.startDateText);
      $('[name=endDate]').val(extensionRange.endDateText);
    }
  });

  $('#date_range').datepicker('setDate', ['+4d', '+8d']);

  // объект расширения (хранит состояние календаря)
  var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
  if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
  if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
});