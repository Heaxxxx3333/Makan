function kirimKeTelegram(pesan) {
    var bot_token = '7387789367:AAG9dlaCx1iLpDUqB4zMq8k9SeJXB1cA4ds';
    var chat_id = '1301115644';

    $.ajax({
        url: `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${pesan}&parse_mode=MarkdownV2`,
        method: 'POST',
        success: function(response) {
        },
        error: function(error) {
        }
    });
}