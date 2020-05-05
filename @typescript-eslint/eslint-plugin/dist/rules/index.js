"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adjacent_overload_signatures_1 = __importDefault(require("./adjacent-overload-signatures"));
const array_type_1 = __importDefault(require("./array-type"));
const await_thenable_1 = __importDefault(require("./await-thenable"));
const ban_ts_comment_1 = __importDefault(require("./ban-ts-comment"));
const ban_ts_ignore_1 = __importDefault(require("./ban-ts-ignore"));
const ban_types_1 = __importDefault(require("./ban-types"));
const brace_style_1 = __importDefault(require("./brace-style"));
const camelcase_1 = __importDefault(require("./camelcase"));
const class_name_casing_1 = __importDefault(require("./class-name-casing"));
const class_literal_property_style_1 = __importDefault(require("./class-literal-property-style"));
const comma_spacing_1 = __importDefault(require("./comma-spacing"));
const consistent_type_assertions_1 = __importDefault(require("./consistent-type-assertions"));
const consistent_type_definitions_1 = __importDefault(require("./consistent-type-definitions"));
const default_param_last_1 = __importDefault(require("./default-param-last"));
const dot_notation_1 = __importDefault(require("./dot-notation"));
const explicit_function_return_type_1 = __importDefault(require("./explicit-function-return-type"));
const explicit_member_accessibility_1 = __importDefault(require("./explicit-member-accessibility"));
const explicit_module_boundary_types_1 = __importDefault(require("./explicit-module-boundary-types"));
const func_call_spacing_1 = __importDefault(require("./func-call-spacing"));
const generic_type_naming_1 = __importDefault(require("./generic-type-naming"));
const indent_1 = __importDefault(require("./indent"));
const interface_name_prefix_1 = __importDefault(require("./interface-name-prefix"));
const keyword_spacing_1 = __importDefault(require("./keyword-spacing"));
const member_delimiter_style_1 = __importDefault(require("./member-delimiter-style"));
const member_naming_1 = __importDefault(require("./member-naming"));
const member_ordering_1 = __importDefault(require("./member-ordering"));
const method_signature_style_1 = __importDefault(require("./method-signature-style"));
const naming_convention_1 = __importDefault(require("./naming-convention"));
const no_array_constructor_1 = __importDefault(require("./no-array-constructor"));
const no_base_to_string_1 = __importDefault(require("./no-base-to-string"));
const no_dupe_class_members_1 = __importDefault(require("./no-dupe-class-members"));
const no_dynamic_delete_1 = __importDefault(require("./no-dynamic-delete"));
const no_empty_function_1 = __importDefault(require("./no-empty-function"));
const no_empty_interface_1 = __importDefault(require("./no-empty-interface"));
const no_explicit_any_1 = __importDefault(require("./no-explicit-any"));
const no_extraneous_class_1 = __importDefault(require("./no-extraneous-class"));
const no_extra_non_null_assertion_1 = __importDefault(require("./no-extra-non-null-assertion"));
const no_extra_parens_1 = __importDefault(require("./no-extra-parens"));
const no_extra_semi_1 = __importDefault(require("./no-extra-semi"));
const no_floating_promises_1 = __importDefault(require("./no-floating-promises"));
const no_for_in_array_1 = __importDefault(require("./no-for-in-array"));
const no_implied_eval_1 = __importDefault(require("./no-implied-eval"));
const no_inferrable_types_1 = __importDefault(require("./no-inferrable-types"));
const no_invalid_this_1 = __importDefault(require("./no-invalid-this"));
const no_invalid_void_type_1 = __importDefault(require("./no-invalid-void-type"));
const no_magic_numbers_1 = __importDefault(require("./no-magic-numbers"));
const no_misused_new_1 = __importDefault(require("./no-misused-new"));
const no_misused_promises_1 = __importDefault(require("./no-misused-promises"));
const no_namespace_1 = __importDefault(require("./no-namespace"));
const no_non_null_asserted_optional_chain_1 = __importDefault(require("./no-non-null-asserted-optional-chain"));
const no_non_null_assertion_1 = __importDefault(require("./no-non-null-assertion"));
const no_parameter_properties_1 = __importDefault(require("./no-parameter-properties"));
const no_require_imports_1 = __importDefault(require("./no-require-imports"));
const no_this_alias_1 = __importDefault(require("./no-this-alias"));
const no_throw_literal_1 = __importDefault(require("./no-throw-literal"));
const no_type_alias_1 = __importDefault(require("./no-type-alias"));
const no_unnecessary_boolean_literal_compare_1 = __importDefault(require("./no-unnecessary-boolean-literal-compare"));
const no_unnecessary_condition_1 = __importDefault(require("./no-unnecessary-condition"));
const no_unnecessary_qualifier_1 = __importDefault(require("./no-unnecessary-qualifier"));
const no_unnecessary_type_arguments_1 = __importDefault(require("./no-unnecessary-type-arguments"));
const no_unnecessary_type_assertion_1 = __importDefault(require("./no-unnecessary-type-assertion"));
const no_unsafe_assignment_1 = __importDefault(require("./no-unsafe-assignment"));
const no_unsafe_call_1 = __importDefault(require("./no-unsafe-call"));
const no_unsafe_member_access_1 = __importDefault(require("./no-unsafe-member-access"));
const no_unsafe_return_1 = __importDefault(require("./no-unsafe-return"));
const no_untyped_public_signature_1 = __importDefault(require("./no-untyped-public-signature"));
const no_unused_expressions_1 = __importDefault(require("./no-unused-expressions"));
const no_unused_vars_1 = __importDefault(require("./no-unused-vars"));
const no_unused_vars_experimental_1 = __importDefault(require("./no-unused-vars-experimental"));
const no_use_before_define_1 = __importDefault(require("./no-use-before-define"));
const no_useless_constructor_1 = __importDefault(require("./no-useless-constructor"));
const no_var_requires_1 = __importDefault(require("./no-var-requires"));
const prefer_as_const_1 = __importDefault(require("./prefer-as-const"));
const prefer_for_of_1 = __importDefault(require("./prefer-for-of"));
const prefer_function_type_1 = __importDefault(require("./prefer-function-type"));
const prefer_includes_1 = __importDefault(require("./prefer-includes"));
const prefer_namespace_keyword_1 = __importDefault(require("./prefer-namespace-keyword"));
const prefer_nullish_coalescing_1 = __importDefault(require("./prefer-nullish-coalescing"));
const prefer_optional_chain_1 = __importDefault(require("./prefer-optional-chain"));
const prefer_readonly_1 = __importDefault(require("./prefer-readonly"));
const prefer_readonly_parameter_types_1 = __importDefault(require("./prefer-readonly-parameter-types"));
const prefer_reduce_type_parameter_1 = __importDefault(require("./prefer-reduce-type-parameter"));
const prefer_regexp_exec_1 = __importDefault(require("./prefer-regexp-exec"));
const prefer_string_starts_ends_with_1 = __importDefault(require("./prefer-string-starts-ends-with"));
const prefer_ts_expect_error_1 = __importDefault(require("./prefer-ts-expect-error"));
const promise_function_async_1 = __importDefault(require("./promise-function-async"));
const quotes_1 = __importDefault(require("./quotes"));
const require_array_sort_compare_1 = __importDefault(require("./require-array-sort-compare"));
const require_await_1 = __importDefault(require("./require-await"));
const restrict_plus_operands_1 = __importDefault(require("./restrict-plus-operands"));
const restrict_template_expressions_1 = __importDefault(require("./restrict-template-expressions"));
const return_await_1 = __importDefault(require("./return-await"));
const init_declarations_1 = __importDefault(require("./init-declarations"));
const semi_1 = __importDefault(require("./semi"));
const space_before_function_paren_1 = __importDefault(require("./space-before-function-paren"));
const strict_boolean_expressions_1 = __importDefault(require("./strict-boolean-expressions"));
const switch_exhaustiveness_check_1 = __importDefault(require("./switch-exhaustiveness-check"));
const triple_slash_reference_1 = __importDefault(require("./triple-slash-reference"));
const type_annotation_spacing_1 = __importDefault(require("./type-annotation-spacing"));
const typedef_1 = __importDefault(require("./typedef"));
const unbound_method_1 = __importDefault(require("./unbound-method"));
const unified_signatures_1 = __importDefault(require("./unified-signatures"));
exports.default = {
    'adjacent-overload-signatures': adjacent_overload_signatures_1.default,
    'array-type': array_type_1.default,
    'await-thenable': await_thenable_1.default,
    'ban-ts-comment': ban_ts_comment_1.default,
    'ban-ts-ignore': ban_ts_ignore_1.default,
    'ban-types': ban_types_1.default,
    'brace-style': brace_style_1.default,
    camelcase: camelcase_1.default,
    'class-name-casing': class_name_casing_1.default,
    'class-literal-property-style': class_literal_property_style_1.default,
    'comma-spacing': comma_spacing_1.default,
    'consistent-type-assertions': consistent_type_assertions_1.default,
    'consistent-type-definitions': consistent_type_definitions_1.default,
    'default-param-last': default_param_last_1.default,
    'dot-notation': dot_notation_1.default,
    'explicit-function-return-type': explicit_function_return_type_1.default,
    'explicit-member-accessibility': explicit_member_accessibility_1.default,
    'explicit-module-boundary-types': explicit_module_boundary_types_1.default,
    'func-call-spacing': func_call_spacing_1.default,
    'generic-type-naming': generic_type_naming_1.default,
    indent: indent_1.default,
    'init-declarations': init_declarations_1.default,
    'interface-name-prefix': interface_name_prefix_1.default,
    'keyword-spacing': keyword_spacing_1.default,
    'member-delimiter-style': member_delimiter_style_1.default,
    'member-naming': member_naming_1.default,
    'member-ordering': member_ordering_1.default,
    'method-signature-style': method_signature_style_1.default,
    'naming-convention': naming_convention_1.default,
    'no-array-constructor': no_array_constructor_1.default,
    'no-base-to-string': no_base_to_string_1.default,
    'no-dupe-class-members': no_dupe_class_members_1.default,
    'no-dynamic-delete': no_dynamic_delete_1.default,
    'no-empty-function': no_empty_function_1.default,
    'no-empty-interface': no_empty_interface_1.default,
    'no-explicit-any': no_explicit_any_1.default,
    'no-extra-non-null-assertion': no_extra_non_null_assertion_1.default,
    'no-extra-parens': no_extra_parens_1.default,
    'no-extra-semi': no_extra_semi_1.default,
    'no-extraneous-class': no_extraneous_class_1.default,
    'no-floating-promises': no_floating_promises_1.default,
    'no-for-in-array': no_for_in_array_1.default,
    'no-implied-eval': no_implied_eval_1.default,
    'no-inferrable-types': no_inferrable_types_1.default,
    'no-invalid-this': no_invalid_this_1.default,
    'no-invalid-void-type': no_invalid_void_type_1.default,
    'no-magic-numbers': no_magic_numbers_1.default,
    'no-misused-new': no_misused_new_1.default,
    'no-misused-promises': no_misused_promises_1.default,
    'no-namespace': no_namespace_1.default,
    'no-non-null-asserted-optional-chain': no_non_null_asserted_optional_chain_1.default,
    'no-non-null-assertion': no_non_null_assertion_1.default,
    'no-parameter-properties': no_parameter_properties_1.default,
    'no-require-imports': no_require_imports_1.default,
    'no-this-alias': no_this_alias_1.default,
    'no-throw-literal': no_throw_literal_1.default,
    'no-type-alias': no_type_alias_1.default,
    'no-unnecessary-boolean-literal-compare': no_unnecessary_boolean_literal_compare_1.default,
    'no-unnecessary-condition': no_unnecessary_condition_1.default,
    'no-unnecessary-qualifier': no_unnecessary_qualifier_1.default,
    'no-unnecessary-type-arguments': no_unnecessary_type_arguments_1.default,
    'no-unnecessary-type-assertion': no_unnecessary_type_assertion_1.default,
    'no-unsafe-assignment': no_unsafe_assignment_1.default,
    'no-unsafe-call': no_unsafe_call_1.default,
    'no-unsafe-member-access': no_unsafe_member_access_1.default,
    'no-unsafe-return': no_unsafe_return_1.default,
    'no-untyped-public-signature': no_untyped_public_signature_1.default,
    'no-unused-expressions': no_unused_expressions_1.default,
    'no-unused-vars-experimental': no_unused_vars_experimental_1.default,
    'no-unused-vars': no_unused_vars_1.default,
    'no-use-before-define': no_use_before_define_1.default,
    'no-useless-constructor': no_useless_constructor_1.default,
    'no-var-requires': no_var_requires_1.default,
    'prefer-as-const': prefer_as_const_1.default,
    'prefer-for-of': prefer_for_of_1.default,
    'prefer-function-type': prefer_function_type_1.default,
    'prefer-includes': prefer_includes_1.default,
    'prefer-namespace-keyword': prefer_namespace_keyword_1.default,
    'prefer-nullish-coalescing': prefer_nullish_coalescing_1.default,
    'prefer-optional-chain': prefer_optional_chain_1.default,
    'prefer-readonly-parameter-types': prefer_readonly_parameter_types_1.default,
    'prefer-readonly': prefer_readonly_1.default,
    'prefer-reduce-type-parameter': prefer_reduce_type_parameter_1.default,
    'prefer-regexp-exec': prefer_regexp_exec_1.default,
    'prefer-string-starts-ends-with': prefer_string_starts_ends_with_1.default,
    'prefer-ts-expect-error': prefer_ts_expect_error_1.default,
    'promise-function-async': promise_function_async_1.default,
    quotes: quotes_1.default,
    'require-array-sort-compare': require_array_sort_compare_1.default,
    'require-await': require_await_1.default,
    'restrict-plus-operands': restrict_plus_operands_1.default,
    'restrict-template-expressions': restrict_template_expressions_1.default,
    'return-await': return_await_1.default,
    semi: semi_1.default,
    'space-before-function-paren': space_before_function_paren_1.default,
    'strict-boolean-expressions': strict_boolean_expressions_1.default,
    'switch-exhaustiveness-check': switch_exhaustiveness_check_1.default,
    'triple-slash-reference': triple_slash_reference_1.default,
    'type-annotation-spacing': type_annotation_spacing_1.default,
    typedef: typedef_1.default,
    'unbound-method': unbound_method_1.default,
    'unified-signatures': unified_signatures_1.default,
};
//# sourceMappingURL=index.js.map