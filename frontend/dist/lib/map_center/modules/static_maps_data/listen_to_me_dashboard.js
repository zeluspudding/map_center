// Generated by CoffeeScript 1.3.3
(function() {
  var namespace,
    __slice = [].slice;

  namespace = function(target, name, block) {
    var item, top, _i, _len, _ref, _ref1;
    if (arguments.length < 3) {
      _ref = [(typeof exports !== 'undefined' ? exports : window)].concat(__slice.call(arguments)), target = _ref[0], name = _ref[1], block = _ref[2];
    }
    top = target;
    _ref1 = name.split('.');
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      item = _ref1[_i];
      target = target[item] || (target[item] = {});
    }
    return block(target, top);
  };

  namespace('VideoDashboard', function(exports) {
    var browseStates, paginate;
    this.state_directory = [];
    this.current_state = '';
    exports.init = function() {
      paginate.init();
      $('.item').live('click', function() {
        var id;
        id = $(this).attr('data-content-id');
        return showcasePanel(id);
      });
      $('#close-overlay').bind('click', function() {
        $('#tm-video-overlay').fadeOut(200);
        return $('#video-drop iframe').remove();
      });
      browseStates();
      return this.fetchState('California');
    };
    exports.fetchState = function(state) {
      var state_data, this_state;
      state_data = "https://nh-ltm.s3.amazonaws.com/" + state + ".js";
      if (this_state = _.find(state_directory, function(i) {
        return i.name === state;
      })) {
        return renderState(this_state);
      } else {
        return $.ajax({
          url: state_data,
          type: 'GET',
          dataType: 'jsonp',
          cache: true,
          success: function(data) {}
        });
      }
    };
    this.showState = function(state, info) {
      var entry, item, _i, _len, _state;
      if (!_.find(state_directory, function(i) {
        return i.name === state;
      })) {
        _state = {
          name: state,
          entries: [],
          count: info.length
        };
        for (_i = 0, _len = info.length; _i < _len; _i++) {
          item = info[_i];
          entry = {};
          entry.id = item.content_id;
          entry.title = item.title;
          entry.post_name = item.name;
          entry.avatar = item.attribution_avatar;
          entry.date = item.add_date;
          entry.city = item.city;
          entry.state = item.state;
          entry.gender = item.gender;
          entry.affiliation = item.political_affiliation;
          entry.issues = _.pluck(item.categories, 'category_name').join(', ');
          entry.thumb = item.media[0].thumb;
          entry.media = item.media[0].video_url;
          _state.entries.push(entry);
        }
        state_directory.push(_state);
      }
      return renderState(_state);
    };
    this.renderState = function(state) {
      paginate.reset();
      paginate.total_pages = Math.ceil(state.entries.length / paginate.items_per_page);
      $('#pg-dir #start-page').text("1");
      $('#pg-dir #end-page').text("" + paginate.total_pages);
      this.current_state = state.name;
      $('#current-state').text("" + state.name);
      paginate.updateProgress();
      if (paginate.total_pages > 1) {
        $('#page-cntrl-rgt').removeClass('disabled');
      }
      render.featuredClips(state.entries);
      return showcasePanel(state.entries[0].id);
    };
    this.render = {
      featuredClips: function(items) {
        return $('#page-track').fadeOut(300, function() {
          return $(this).html(JST["templates/ltm_featured_clips"]({
            set: items,
            per_page: paginate.items_per_page
          })).fadeIn(300, function() {
            return $('.item > .title').dotdotdot();
          });
        });
      }
    };
    this.showcasePanel = function(id) {
      var curr_state, video;
      curr_state = _.find(this.state_directory, function(state) {
        return state.name === this.current_state;
      });
      video = _.find(curr_state.entries, function(entry) {
        return entry.id === id;
      });
      return $('#view-port-zone').html(JST["templates/ltm_showcase_panel"]({
        feature: video
      })).fadeIn(300);
    };
    paginate = {
      items_per_page: 4,
      total_pages: 0,
      current_page: 0,
      init: function() {
        $('#page-cntrl-lft').bind('click', function() {
          return paginate.prevPage();
        });
        return $('#page-cntrl-rgt').bind('click', function() {
          return paginate.nextPage();
        });
      },
      reset: function() {
        this.total_pages = 0;
        this.current_page = 1;
        return $('#page-cntrl-lft').addClass('disabled');
      },
      updateProgress: function() {
        $('#pg-dir #start-page').text("" + this.current_page);
        return $('#scrubber #elapsed').css({
          'width': "" + (Math.round((this.current_page / this.total_pages) * 100)) + "%"
        });
      },
      nextPage: function() {
        if (this.current_page < this.total_pages && !$('#page-cntrl-rgt').hasClass('disabled')) {
          return $('#page-track .selected').fadeOut(300, function() {
            $('.feature_page').removeClass('selected');
            return $("[data-page-num='" + (paginate.current_page + 1) + "']").fadeIn(300, function() {
              $(this).addClass('selected');
              $('.item > .title').dotdotdot();
              paginate.current_page += 1;
              paginate.updateProgress();
              if (paginate.current_page === paginate.total_pages) {
                $('#page-cntrl-rgt').addClass('disabled');
              }
              if (paginate.current_page !== 1) {
                return $('#page-cntrl-lft').removeClass('disabled');
              }
            });
          });
        }
      },
      prevPage: function() {
        if (this.current_page !== 1 && !$('#page-cntrl-lft').hasClass('disabled')) {
          return $('#page-track .selected').fadeOut(300, function() {
            $(this).removeClass('selected');
            return $("[data-page-num='" + (paginate.current_page - 1) + "']").fadeIn(300, function() {
              $(this).addClass('selected');
              $('.item > .title').dotdotdot();
              paginate.current_page -= 1;
              paginate.updateProgress();
              if (paginate.current_page === 1) {
                $('#page-cntrl-lft').addClass('disabled');
              }
              if (paginate.current_page !== paginate.total_pages) {
                return $('#page-cntrl-rgt').removeClass('disabled');
              }
            });
          });
        }
      }
    };
    return browseStates = function() {
      var i, state, _i, _len;
      console.log(state_rollups);
      for (_i = 0, _len = state_rollups.length; _i < _len; _i++) {
        state = state_rollups[_i];
        i = $('<div\>', {
          "class": 'state-select'
        });
        i.attr('data-state', state.name);
        i.text(state.name);
        $('#browse-popover').append(i);
      }
      $('#browse-popover').lionbars();
      $('#browse-states').bind('click', function() {
        return $('#browse-popover').fadeIn(200);
      });
      $(document).bind('click', function(e) {
        if ($('#browse-popover').is(':visible') && !$(e.target).closest('#browse-states').length > 0) {
          return $('#browse-popover').fadeOut(250);
        }
      });
      return $('.state-select').bind('click', function() {
        var new_state;
        new_state = $(this).attr('data-state');
        console.log(new_state);
        return VideoDashboard.fetchState(new_state);
      });
    };
  });

}).call(this);
