/**
 * Created by hehui on 2015/12/18.
 */

var listEl = new Vue({
    el: '#dy-list',
    data: {
        items: [
            {
                "events": ["news.add", "news.edit"],
                "url": "http:\/\/xx.home.cn",
                "tryTimes": "1",
                "id": "2",
                "enable": "1"
            }, {
                "events": ["news.add", "news.update", "supply.add"],
                "url": "http:\/\/xx.home.cn",
                "tryTimes": "5",
                "id": "3",
                "enable": "0"
            }, {
                "events": ["goods.add", "goods.del"],
                "url": "http:\/\/fdife.home.cn",
                "tryTimes": "3",
                "id": "4",
                "enable": "0"
            }, {
                "events": ["supply.add", "supply.del", "user.login"],
                "url": "http:\/\/www.jc001.cn",
                "tryTimes": "12",
                "id": "1",
                "enable": "1"
            }
        ],
        hasExists: false,
        activeItemData: null,
        initItemData: {
            "events": ['select'],
            "url": "http:\/\/www.jc001.cn",
            "tryTimes": "0",
            "id": "",
            "enable": "1"
        }
    },
    // 排序items
    created: function () {
        this.items.sort(function (a, b) {
            return a.id - b.id;
        });
    },
    methods: {
        add: function() {
            this.hasExists = true;
            var items = this.items;
            if(items.length == 0) this.initItemData.id = 0;
            else this.initItemData.id = parseInt(items[items.length - 1].id) + 1;
            this.activeItemData = JSON.parse(JSON.stringify(this.initItemData));
        },
        delete: function(item) {
            var items = this.items
            var delIdx = items.indexOf(item);
            this.items.splice(delIdx, 1);
        },
        edit: function(item) {
            this.activeItemData = item;
        },
        load: function (item) {

        },
        submit: function(event) {
            this.modifyItems(this.activeItemData);
            event.preventDefault();
        },

        modifyItems: function(item) {
            var events = item.events;
            if('string' == typeof events) {
                events = events.split('|');
            }
            for(i in events) {
                events[i] = events[i].trim();
            }
            item.events = events;

            for(i in this.items) {
                if(this.items[i].id == item.id) {
                    this.items[i] = item;
                    return;
                }
            }
            this.items.push(JSON.parse(JSON.stringify(item)));
        }

    }
})