class Dashing.TargetprocessBurndown extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered

  onData: (data) ->
    $(@node).parent().attr('onclick', 'window.open(\'' + data.url + '\')')