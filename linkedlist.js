function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
    add: function(data) {
        var node = {
            data: data,
            next: null
        };
        var current;

        if (this._head == null) {
            this._head = node;
        } else {
            current = this._head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this._length++;
    },
    remove: function(index) {
        if (index > -1 && index < this._length) {
            var current = this._head, prev, i = 0;

            if (index === 0) {
                this._head = current.next;
            } else {
                while (i++ < index) {
                    prev = current;
                    current = current.next;
                }

                prev.next = current.next;
            }

            this._length--;
        } else {
            return null;
        }

    },
    item: function(index) {
        if (index > -1 && index < this._length) {
            var current = this._head, i = 0;

            while(i++ < index) {
                current = current.next;
            }

            return current.data;
        } else {
            return null
        }
    },
    getSize: function() {
        return this._length;
    }
};
