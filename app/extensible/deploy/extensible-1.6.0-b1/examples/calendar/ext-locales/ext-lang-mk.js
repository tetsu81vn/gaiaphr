/*!
 * Extensible 1.6.0-b1
 * Copyright(c) 2010-2012 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
/**
 * Macedonia translation
 * By PetarD petar.dimitrijevic@vorteksed.com.mk (utf8 encoding)
 * 23 April 2007
 */
Ext.onReady(function() {
    var cm = Ext.ClassManager, 
        exists = Ext.Function.bind(cm.get, cm);

    if(Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Вчитувам...</div>';
    }

    if(exists('Ext.view.View')){
        Ext.view.View.prototype.emptyText = "";
    }

    if(exists('Ext.grid.Panel')){
        Ext.grid.Panel.prototype.ddText = "{0} избрани редици";
    }

    if(Ext.TabPanelItem){
        Ext.TabPanelItem.prototype.closeText = "Затвори tab";
    }

    if(exists('Ext.form.field.Base')){
        Ext.form.field.Base.prototype.invalidText = "Вредно�?та во ова поле е невалидна";
    }

    if(Ext.LoadMask){
        Ext.LoadMask.prototype.msg = "Вчитувам...";
    }
    
    if(Ext.Date){
        Ext.Date.monthNames = [
        "Јануари",
        "Февруари",
        "Март",
        "�?прил",
        "Мај",
        "Јуни",
        "Јули",
        "�?вгу�?т",
        "Септември",
        "Октомври",
        "�?оември",
        "Декември"
        ];

        Ext.Date.dayNames = [
        "�?едела",
        "Понеделник",
        "Вторник",
        "Среда",
        "Четврток",
        "Петок",
        "Сабота"
        ];
    }
    
    if(Ext.MessageBox){
        Ext.MessageBox.buttonText = {
            ok     : "Потврди",
            cancel : "Поништи",
            yes    : "Да",
            no     : "�?е"
        };
    }

    if(exists('Ext.util.Format')){
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0434\u0435\u043d',  // Macedonian Denar
            dateFormat: 'd.m.Y'
        });
    }

    if(exists('Ext.picker.Date')){
        Ext.apply(Ext.picker.Date.prototype, {
            todayText         : "Дене�?ка",
            minText           : "Овој датум е пред најмалиот датум",
            maxText           : "Овој датум е пред најголемиот датум",
            disabledDaysText  : "",
            disabledDatesText : "",
            monthNames	: Ext.Date.monthNames,
            dayNames		: Ext.Date.dayNames,
            nextText          : 'Следен ме�?ец (Control+Стрелка де�?но)',
            prevText          : 'Претходен ме�?ец (Control+Стрелка лево)',
            monthYearText     : 'Изберете ме�?ец (Control+Стрелка горе/Стрелка де�?но за менување година)',
            todayTip          : "{0} (Spacebar)",
            format            : "d.m.y"
        });
    }

    if(exists('Ext.toolbar.Paging')){
        Ext.apply(Ext.PagingToolbar.prototype, {
            beforePageText : "Страница",
            afterPageText  : "од {0}",
            firstText      : "Прва Страница",
            prevText       : "Претходна Страница",
            nextText       : "Следна Страница",
            lastText       : "По�?ледна Страница",
            refreshText    : "О�?вежи",
            displayMsg     : "Прикажувам {0} - {1} од {2}",
            emptyMsg       : '�?ема податоци за приказ'
        });
    }

    if(exists('Ext.form.field.Text')){
        Ext.apply(Ext.form.field.Text.prototype, {
            minLengthText : "Минималната должина за ова поле е {0}",
            maxLengthText : "Мак�?ималната должина за ова поле е {0}",
            blankText     : "Податоците во ова поле �?е потребни",
            regexText     : "",
            emptyText     : null
        });
    }

    if(exists('Ext.form.field.Number')){
        Ext.apply(Ext.form.field.Number.prototype, {
            minText : "Минималната вредно�?т за ова поле е {0}",
            maxText : "Мак�?ималната вредно�?т за ова поле е {0}",
            nanText : "{0} не е валиден број"
        });
    }

    if(exists('Ext.form.field.Date')){
        Ext.apply(Ext.form.field.Date.prototype, {
            disabledDaysText  : "�?еактивно",
            disabledDatesText : "�?еактивно",
            minText           : "Датумот во ова поле мора да биде пред {0}",
            maxText           : "Датумот во ова поле мора да биде по {0}",
            invalidText       : "{0} не е валиден датум - мора да биде во формат {1}",
            format            : "d.m.y"
        });
    }

    if(exists('Ext.form.field.ComboBox')){
        Ext.apply(Ext.form.field.ComboBox.prototype, {
            valueNotFoundText : undefined
        });
        Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
            loadingText       : "Вчитувам..."
        });
    }

    if(exists('Ext.form.field.VTypes')){
        Ext.apply(Ext.form.field.VTypes, {
            emailText    : 'Ова поле треба да биде e-mail адре�?а во формат "user@example.com"',
            urlText      : 'Ова поле треба да биде URL во формат "http:/'+'/www.example.com"',
            alphaText    : 'Ова поле треба да �?одржи �?амо букви и _',
            alphanumText : 'Ова поле треба да �?одржи �?амо букви, бројки и _'
        });
    }

    if(exists('Ext.grid.header.Container')){
        Ext.apply(Ext.grid.header.Container.prototype, {
            sortAscText  : "Сортирај Ра�?течки",
            sortDescText : "Сортирај Опаѓачки",
            lockText     : "Заклучи Колона",
            unlockText   : "Отклучи колона",
            columnsText  : "Колони"
        });
    }

    if(exists('Ext.grid.PropertyColumnModel')){
        Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
            nameText   : "Име",
            valueText  : "Вредно�?т",
            dateFormat : "m.d.Y"
        });
    }

});