<template>
  <div id="disqus_thread">
    <div id="disqus_empty"></div>
  </div>
</template>

<script>
  export default {
    name: 'Disqus',
    props: {
      identifier: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: false
      },
      title: {
       type: String,
       required: false
      },
      remote_auth_s3: {
       type: String,
       required: false
      },
      api_key: {
       type: String,
       required: false
      },
      sso_config: {
        type: Object,
        required: false
      },
      language: {
        type: String,
        required: false
      }
    },
    mounted () {
      if (window.DISQUS) {
        this.reset(window.DISQUS)
        return
      }

      window.addEventListener('scroll', this.scrollHandling.bind(this), false);
    },
    methods: {
      reset (dsq) {
        const self = this
        dsq.reset({
          reload: true,
          config: function () {
            self.setBaseConfig(this)
          }
        })
      },
      init () {
        const self = this

        window.disqus_config = function() {
          self.setBaseConfig(this)
        }

        var isDisqusEmpty = document.getElementById('disqus_empty'),
          disqusTargetDOM = document.getElementById('disqus_thread'),
          disqusScript = document.createElement('script'),
          disqusHook = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);

        if (disqusTargetDOM && isDisqusEmpty) {
          disqusScript.type = 'text/javascript';
          disqusScript.async = true;
          disqusScript.src = `//nyandevblog.disqus.com/embed.js`;
          disqusHook.appendChild(disqusScript);
          isDisqusEmpty.remove();
        }
      },
      setBaseConfig (disqusConfig){
        disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
        disqusConfig.page.url = (this.url || this.$el.baseURI)
        if (this.title){
          disqusConfig.page.title = this.title;
        }
        if (this.remote_auth_s3){
          disqusConfig.page.remote_auth_s3 = this.remote_auth_s3;
        }
        if (this.api_key){
          disqusConfig.page.api_key = this.api_key;
        }
        if (this.sso_config){
          disqusConfig.sso = this.sso_config;
        }
        if (this.language){
          disqusConfig.language = this.language;
        }
        disqusConfig.callbacks.onReady = [() => {
          this.$emit('ready')
        }]
        
        disqusConfig.callbacks.onNewComment = [(comment) => {
          this.$emit('new-comment', comment)
        }]
      },
      scrollHandling (e, callback) {
        var currentScroll = document.scrollingElement.scrollTop;
        var disqus_target = document.getElementById('disqus_thread');

        if (disqus_target && (currentScroll > disqus_target
            .getBoundingClientRect().top - 150)) {
          this.init();
        }
      }
    },
    destroy () {
      window.removeEventListener('scroll', this.scrollHandling, false);
      console.log("Remove event listener")
    }
  }
</script>