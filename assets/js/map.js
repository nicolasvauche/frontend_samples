function svgTip (opts) {
  opts = opts || {}
  opts.fontsize = opts.fontsize || '16px'
  opts.padding = opts.padding || '.25rem .5rem'
  opts.bgcolor = opts.bgcolor || '#000'
  opts.color = opts.color || '#fff'
  opts.opacity = opts.opacity || 0.75
  $.each($('[title]', 'svg'), function (id, obj) {
    var tt = $(this).attr('title'),
      that = $("<div class='svgtip'>" + tt + '</div>')
    that.css({
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'none',
      'background-color': opts.bgcolor,
      color: opts.color,
      padding: opts.padding,
      'font-size': opts.fontsize,
      opacity: opts.opacity,
      'pointer-events': 'none',
      'border-radius': '6px'
    })
    $(this).hover(
      function (event) {
        that.css({
          left: event.clientX,
          top: event.clientY + $(window).scrollTop()
        })
        that.addClass('active')
        that.show()
      },
      function () {
        that.hide()
        that.removeClass('active')
      }
    )
    $(this).on('mousemove', function (event) {
      if (that.hasClass('active')) {
        that.css({
          left: event.clientX,
          top: event.clientY + $(window).scrollTop() - that.height()
        })
      }
    })
    $('body').append(that)
  })
}
new svgTip({
  fontsize: '13px',
  padding: '5px 10px'
})
function lll (msg) {
  $('#debug').append(msg + '<br/>')
}
