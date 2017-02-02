<div class="calendar">
  <h2>Calendar - no deps</h2>
  <div class="furbie"></div>
</div>

[#-- mount compiled JS bundle --]
${resfn.js(["/mgnl-custom/webresources/js/bundle.js"])!}

<script>
  var c = new Calendar('${content.elementClass!}')
  c.render()
</script>
